# Utiliser une image officielle PHP avec Apache
FROM php:8.0-apache

# Copier le contenu de ton projet dans le dossier où Apache servira les fichiers
COPY . /var/www/html/

# Installer les dépendances (si tu as un fichier composer.json)
# RUN apt-get update && apt-get install -y git unzip
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# RUN composer install

# Exposer le port 80 pour le serveur Apache
EXPOSE 80