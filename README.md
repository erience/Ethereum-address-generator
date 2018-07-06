# Ethereum Address Generator

Generate new Ethereum address-privateKey pairs with HTML-NodeJS and mysql database.

## Install Node and NPM

If node and npm are not installed on your machine or the remote server, install using the commands

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

check versions by using

```
node -v
v8.11.3
npm -v
5.6.0
```

## Download and setup the project

Download and extract this project into the directory where your code is. Then run the following command so that the needed node packages will be installed automatically. The packages to be installed are specified in the file ``` package.json ``` with their versions.

```
npm install
```

Additionally download the package nodemon in the project directory so that you won't have to restart the node server manually everytime you make any changes.

```
npm install -g nodemon
```

Then go to ``` index.js ``` file and do the necessary changes in that file. For example: enter your database credentials, localhost or on which ever remote server you are running.

Then in ``` index.html ``` file, enter your API address from which the generation of address takes place. It would be in the format of ``` http://YOUR_IP:PORT/API_NAME ``` 

If you are working on the local machine, your IP would be ``` 127.0.0.1 ``` or ``` localhost ``` and if you are working on the remote machine, enter it's dedicated IP and the port which is open.

Also the sql file for the database is attached ``` test_wallet.sql ``` which you would have to import in your database. Or create a database of your own choice.

### Run

After setting everything up, in the root project directory, run the following command to start your node server.

```
nodemon
```

It would automatically fetch the entry point from the ``` package.json ``` file which in this case will be ```index.js ```
Then open the ``` index.html ``` file in your browser.
Make sure the server is running in your command line.

## Contributing

Erience Solutions

## Authors

Erience Solutions
