# piSurf
A cluster of Pies that can surf the web - A project suggested by Chris at Crosstalk Solutions

## Plan
- [ ] Ansible to install the device
- [ ] Script to control chromium that will surf the web.
- [ ] Pub/Sub controller (MQTT?)
- [ ] Controller

## Proof of concept

This works on vagrant (I am developing on OSX with virtualbox)

```
git clone https://github.com/bluerhinos/piSurf.git
cd piSurf
cd vagrant/SingleNode
vagrant up
vagrant ssh
```

Then wikiSafari.js will just loop requesting a random wiki article.
```
cd /vagrant/puppeteer
node wikiSafari.js
```

