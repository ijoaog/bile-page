module.exports = {
	apps: [
	  {
		name: "mypage",
		script: "servidor.js",
		instances: 1,
		autorestart: true,
		watch: false,
		max_memory_restart: '1G',
	  }
	]
  };
  