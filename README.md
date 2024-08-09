# frontend-collection

This repository contains a collection of generic web frontends for accessing RESTful services from the KIT Data Manager service portfolio. The idea is to have graphical user interfaces available such that certain base services can be directly used for performing basic tasks without the need of integrating them in your own frontends before being able to use them the first time.

However, for some application cases, these generic web frontends might even be sufficient for direct interaction with our services, and they might be offered to the end-user. To allow that, all frontends of this collection offer a certain degree of customization to slightly adapt their presentation to specific needs.

## Requirements
- Python (2.x or 3.x)
- handlebars

## Installation on MatWerk

```bash
# Create a folder with the actual date as postfix (e.g.: frontend_2024_29_07)
user@hostname:~ bash build.sh /var/www/matwerk/frontend
# Remove actual link
user@hostname:~ rm /INSTALLATION/DIR/frontend
# Create new link to the most current version
user@hostname:~ ln -s /INSTALLATION/DIR/frontend_ACTUAL_DATE /INSTALLATION/DIR/frontend
```
## License

The KIT Data Manager is licensed under the Apache License, Version 2.0.
