FROM node:22

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Install MariaDB server and client
RUN apt-get update && apt-get install -y mariadb-server mariadb-client

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

RUN service mysql start \
  && mysql -u root -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'root'; FLUSH PRIVILEGES;" \
  && mysql -u root -e "CREATE DATABASE IF NOT EXISTS ImobiliariaVanguard;" \
  && mysqladmin -u root -proot shutdown
