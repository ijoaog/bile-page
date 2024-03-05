module.exports = {
	apps: [
	  {
		name: "nome_do_seu_app",
		script: "servidor.js",
		instances: 1,
		autorestart: true,
		watch: false,
		max_memory_restart: '1G',
		env: {
		  NODE_ENV: 'production',
		  PORT: 3050  // Substitua pela porta que o seu aplicativo está ouvindo
		},
		env_production: {
		  NODE_ENV: 'production',
		  PORT: 3050
		}
	  }
	]
  };
  