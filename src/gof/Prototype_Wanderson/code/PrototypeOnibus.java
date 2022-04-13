public class PrototypeOnibus extends FrotaPrototype{

	public PrototypeOnibus(PrototypeOnibus prototypeOnibus) {
		this.placa = prototypeOnibus.getPlaca();
		this.marca = prototypeOnibus.getMarca();
		this.tipo = prototypeOnibus.getTipo();
		this.cor = prototypeOnibus.getCor();
		
		}
	public PrototypeOnibus() {
		marca = "MBENZ";
		placa = null;
		tipo = "Onibus";
		cor = "Amarelo";
	}

	@Override
	public String exibirInfo() {
		return "Marca: "+ getMarca() + " \nTipo: "+ getTipo() +  " \nCor: "+ getCor() + " \nPlaca: " + getPlaca() + "\n---------------------\n";
	}

	@Override
	public FrotaPrototype clonar() {
		return new PrototypeOnibus(this);
	}

}
