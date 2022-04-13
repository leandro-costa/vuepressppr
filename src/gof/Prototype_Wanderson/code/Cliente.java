public class Cliente {
	public static void main(String[] args) {
		System.out.println("_________________________FROTA DE CARROS____________________________");
		PrototypeCarro autoPrototype = new PrototypeCarro();
		
		FrotaPrototype carro1 = autoPrototype.clonar();
		autoPrototype.setPlaca("AAA-0A00");
		System.out.println(autoPrototype.exibirInfo());
		
		FrotaPrototype carro2 = autoPrototype.clonar();
		autoPrototype.setPlaca("AAA-1A11");
		System.out.println(autoPrototype.exibirInfo());
		
		FrotaPrototype carro3 = autoPrototype.clonar();
		autoPrototype.setPlaca("AAA-2A22");
		System.out.println(autoPrototype.exibirInfo());
		
		System.out.println("_________________________FROTA DE MOTOS____________________________");
		PrototypeMoto motoPrototype = new PrototypeMoto();
		
		FrotaPrototype moto1 = motoPrototype.clonar();
		motoPrototype.setPlaca("BBB-0B00");
		System.out.println(motoPrototype.exibirInfo());
		
		FrotaPrototype moto2 = motoPrototype.clonar();
		motoPrototype.setPlaca("BBB-1B11");
		System.out.println(motoPrototype.exibirInfo());
		
		FrotaPrototype moto3 = motoPrototype.clonar();
		motoPrototype.setPlaca("BBB-2B22");
		System.out.println(motoPrototype.exibirInfo());
		
		System.out.println("___________________________FROTA DE ONIBUS__________________________");
		
		PrototypeOnibus busPrototype = new PrototypeOnibus();
		
		FrotaPrototype onibus1 = motoPrototype.clonar();
		busPrototype.setPlaca("CCC-0C00");
		System.out.println(busPrototype.exibirInfo());
		
		FrotaPrototype onibus2 = busPrototype.clonar();
		busPrototype.setPlaca("CCC-1C11");
		System.out.println(busPrototype.exibirInfo());
		
		FrotaPrototype onibus3 = busPrototype.clonar();
		busPrototype.setPlaca("CCC-2C22");
		System.out.println(busPrototype.exibirInfo());
	}

}