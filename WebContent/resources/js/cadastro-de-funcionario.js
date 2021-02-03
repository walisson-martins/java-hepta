var app = new Vue({
	el: "#app",
	data: {
		mensagem: "Bem vindo (a) ao sistema de cadastro de funcionário!",
	},
	methods: {
		salvar: () => {
			console.log('clicado');
		},
		cadastrarFuncionario: () => {
			console.log('clicado');
		}
	}
})
