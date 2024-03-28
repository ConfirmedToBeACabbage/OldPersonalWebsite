# Abstract
This used to be a fun project of mine a while ago for a personal website of mine. It has a mix of technologies used in it's stack and wasn't taken too seriously in terms of implementation. I didn't think about scaling or wider access to this code.
Was a fun playground/sandbox where I can play around with different technologies and strategies. However, it's become old and I want to refactor this. So the old website is becoming open source. 

## Setup Guide
It's possible to run all of this on a single virtual machine. I used Google Cloud for my hosting and a singular machine with minimum ram. The server and website just talk to each other seamlessly. Although it's not included there is some nginx configuration 
which is required for this to work. It's very simple reverse proxy configurations to talk to the server on the same machine. 

To set this up, simply go into /Server and /Website and do npm install --force. I left this website alone for a while now and I didn't bother to go through the dependency hell that it is. It's running on pure faith. Feel free to do npm audit --force also and npm fund.

## Website Picture
![An old rock in the desert](/Pictures/c1.png)
![An old rock in the desert](/Pictures/c2.png)
![An old rock in the desert](/Pictures/c3.png)
