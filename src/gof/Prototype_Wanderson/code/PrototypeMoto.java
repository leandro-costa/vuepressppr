public class PrototypeMoto extends FrotaPrototype{

	protected PrototypeMoto(PrototypeMoto prototypeMoto) {
			this.tipo = prototypeMoto.getTipo();
			this.placa = prototypeMoto.getPlaca();
			this.cor = prototypeMoto.getCor();
			this.marca = prototypeMoto.getMarca();
			}
		public PrototypeMoto() {
			tipo = "Motocicleta";
			cor = "Vermelha";
			marca = "Honda";
			placa = null;
		}

		@Override
		public String exibirInfo() {
			return "Marca: "+ getMarca() + " \nTipo: "+ getTipo() +  " \nCor: "+ getCor() + " \nPlaca: " + getPlaca() + "\n---------------------\n";
		}

		@Override
		public FrotaPrototype clonar() {
			return new PrototypeMoto(this);
		}

}
