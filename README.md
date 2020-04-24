<h1 align="center">Howdy</h1>

<h2 align="center">A Location Based Party App</h2>

<h4 align="center">Connect with your neighbors based on your location and experience real time chat, image sharing, and game features!</h4>

## Team

  - __Product Owner__: Heather Haylett
  - __Scrum Master__: James Easter
  - __Development Team Members__: Matt Hritz, Sean Hart, Chris Nguyen

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
    - [Installing Dependencies](#installing-dependencies)
4. [Team](#team)
5. [Contributing](#contributing)

## Usage

1. Login using google account and allow access to your location. 
2. Once logged in, navigate to the Parties page and either create or join a party.
3. Parties shown are organized chronologically. 
4. A User is allowed access to a party if their location is within the specified radius set by the party creator.
5. Parties can only be entered within 30 minutes of their start time.
6. Join a party to experience real time chat, image sharing, and game features!

## Requirements

- Node 8.17.0
- MySQL Ver. 14.14 Dist. 5.7.28 

## Development

### Installing Dependencies

> Clone down the [repo](http://github.com/team-tauros/) and from within the root directory run:

```
npm install
```
> Ensure that Mysql Is Running
```
mysql -u root < schema.sql
```
> Then start the server
```
npm run start:client
npm run start
```
> Open localhost:8080

### Roadmap

View the project roadmap [here](https://github.com/team-tauros/team-tauros/projects/1)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Technologies Used:

React, Node.js, Express, Axios, Socket.io, Geo-location, Cloudinary, Google Login. 





