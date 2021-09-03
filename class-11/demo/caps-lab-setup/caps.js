// pull in global events pool

// pull in the vendor module
// pull in the driver module

events.on('pickup', (payload) => console.log('pickup', payload));
events.on('in-transit', (payload) => console.log('in-transit', payload))
events.on('delivered', (payload) => console.log('delivered', payload))