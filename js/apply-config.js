// requires jQuery in HTML, like this:
// <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

function userLoggedIn(login) {
    if (login) {
        $("#login_icon").attr("class", "sign-out icon")
        $("#login_button_text").text("Logout");
        addMessage(0, 'User ' + keycloak.idTokenParsed.preferred_username + ' logged in.');
        config.token = keycloak.token;
    } else {
        $("#login_icon").attr("class", "sign-in icon")
        $("#login_button_text").text("Login");
        config.token = null;
    }
    reloadTable();
}

function applyConfig(ajaxBaseUrl, keycloak, tags, showServiceUrl, appDescription) {
    if (!showServiceUrl) {
        $('#service-url-input').empty();
    }
    // set header
    $('#app-logo').attr("src", appDescription["app-logo"]);
    let header = appDescription["app-title"] +
        '<div id="app-subtitle" class="sub header">' + appDescription["app-subtitle"] + '</div>';
    
    $('#app-title').html(header);
    
    
    if (typeof keycloak != typeof undefined) {
        keycloak.onAuthSuccess = function () {
            userLoggedIn(true);
        };
        keycloak.onAuthLogout = function () {
            userLoggedIn(false);
        };
    
        keycloak.onTokenExpired = () => {
            addMessage(0, 'Keycloak token expired. Trying to refresh.');
            keycloak.updateToken(30).success(() => {
                addMessage(0, 'Successfully got a new token.');
                config.token = keycloak.token;
            }).catch(() => {
                addMessage(1, "Failed to refresh keycloak token.");
                config.token = null;
            });
        };
    
        keycloak.init({
            responseMode: 'fragment',
        });
    
        $("#login_button").click(() => {
            if ($("#login_button_text").text() === "Login") {
                keycloak.login();
            } else {
                keycloak.logout();
            }
        });
    } else {
        $("#login_button").attr("style", "display:none");
    }
}
