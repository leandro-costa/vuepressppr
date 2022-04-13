public class PrototypeCarro extends FrotaPrototype{

	protected PrototypeCarro (PrototypeCarro prototypeCarro) {
		
		this.tipo = prototypeCarro.getTipo();
		this.placa = prototypeCarro.getPlaca();
		this.cor = prototypeCarro.getCor();
		this.marca = prototypeCarro.getMarca();
		}

	public PrototypeCarro() {
		tipo = "Automovel";
		cor = "Branca";
		placa = null;
		marca = "Ford";
	}

	@Override
	public String exibirInfo() {
		return "Marca: "+ getMarca() + " \nTipo: "+ getTipo() +  " \nCor: "+ getCor() + " \nPlaca: " + getPlaca() + "\n---------------------\n";
	}

	@Override
	public FrotaPrototype clonar() {
	return new PrototypeCarro(this);
	}
}