public abstract class FrotaPrototype {
	
	protected String cor;
	protected String placa;
	protected String tipo;
	protected String marca;

	public abstract String exibirInfo();
	
	public abstract FrotaPrototype clonar();
	
//metodos gets e sets...	

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}
	
	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}
}