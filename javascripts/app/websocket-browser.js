!function(){$(document).ready(function(){$("button.tryme").click(function(){var t=new WebSocket("wss://socket.blockcypher.com/v1/btc/main"),e=0;t.onmessage=function(i){var n=JSON.parse(i.data),s=n.hash.substring(0,6)+"...",o=n.total/1e8,a=n.addresses.join(", ");$("#browser-websocket").before("<div>Unconfirmed transaction "+s+" totalling "+o+"BTC involving addresses "+a+"</div>"),e++,e>10&&t.close()},t.onopen=function(){t.send(JSON.stringify({filter:"event=unconfirmed-tx"}))}})})}(window);