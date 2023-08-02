Write a socket-server chat-server that accepts clients that connect to it over TCP. An example client would be `netcat` or `telnet`.

In order to start we will focus on creating an MVP version with the most basic functionality. As time permits we will have some follow-ups, so let's focus on getting the MVP running first:

Connect and disconnect with multiple client support and basic message forwarding:

- The chat server should be capable of handling multiple clients connecting at the same time.
- Disconnection should be handled in a clean way.
- Should be able to receive and forward messages among clients (message is not echoed back to sender).

```
> yo
< whats up?
> Nothing much!!
< same here, hbu?
> same ol' same
```
