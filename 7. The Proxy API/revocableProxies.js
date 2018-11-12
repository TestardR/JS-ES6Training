// Format : Proxy.revocable(...)

var t = {
  tableId: 99
};

let { proxy, revoke } = Proxy.revocable(t, {
  get: function(target, prop, receiver) {
    return Reflect.get(target, prop, receiver) + 100;
  }
});

console.log(proxy.tableId); // does not exist
revoke();
console.log(proxy.size); // cannot call properties on proxy that has been revoked
