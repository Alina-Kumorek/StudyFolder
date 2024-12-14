# Install java ecommerce

* AWS via web
    zalogować się do Amazona przez przegladarkę i ręcznie utworzyć tą instancję
* vscode
* cli -> gitbash, terminall
* vm & public ip
    * confirm access
    * private key + user
* repository

## Assumption

* IP: 3.74.158.108
* username: ec2-user
* key passphrase: student1

## SHH Access
```bash
    # klucz
    curl -O http://adsk.dydaktyka.jkan.pl/_static/id_student
```
```bash
    chmode 600 id_student
```

```bash
    # połączenie
    ssh ec2-user@3.74.158.108 -i id_student
```


```bash
    # znaczek zachęty
    PS1=hallo:
```



## install packages
* Packege manager
    * Debian -> ``apt``
    * Alpine -> ``apt``
    * Amazon Linux -> ``dnf``
* Search for packages
    * ``dnf search java``
* Install java package


## Repository
    * url: ``https://github.com/Alina-Kumorek/pp4``

```bash
    # install git
    sudo dnf install git
```
```bash
    # synchronize repository
    git clone https://github.com/Alina-Kumorek/pp4
        # -b main /my/destination/catalog
```

## JVM & Maven

```bash
    # install java
    sudo dnf install java-17-amazon-corretto
```
```bash
    # install maven <== przykład innej opcji installowania
    # download binary archive
    wget https://dlcdn.apache.org/maven/maven-3/3.9.9/binaries/apache-maven-3.9.9-bin.tar.gz
    # extract archive
    tar -xvzf apache-maven-3.9.9-bin.tar.gz
    # add link to maven to $PATH
    sudo ln -s /home/ec2-user/apache-maven-3.9.9/bin/mvn /usr/local/bin/mvn
```

## DIRS

## test & compile
```bash
    # maven compile
    cd pp4/Kumorek_Alina-PP4
    mvn compile
    mvn test
    mvn package
    # mvn -DskipTests package

```

## start ecommerce

    * chrome open -> ``http://3.74.158.108:8080``
```bash
    java -Dserver.port=8080 -jar target/Kumorek_Alina-PP4-1.0-SNAPSHOT.jar
    # Pobrać tą parent część z repo jkanclerz do pom
```

    * chrome open -> ``http://3.74.158.108``
```bash
    sudo java -Dserver.port=80 -jar target/Kumorek_Alina-PP4-1.0-SNAPSHOT.jar
```


```bash
    ssh ec2-user@3.74.158.108 -i id_student "sudo bash -s" < install.sh
```