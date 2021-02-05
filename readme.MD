The project demonstrates work with leafletmap

Using in dev mode:

```
npm install
npm run serve
```

If you go to ```/map``` page without mark id (or your don't have any yet) - the application 
will try to define your location with ```navigator.geolocation``` API and centering map in it

For testing, you can use:
```
npm run test:unit
```