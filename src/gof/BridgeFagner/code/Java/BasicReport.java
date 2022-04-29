
public class BasicReport extends Report {

	public BasicReport(File file, Product product) {
		super(file, product);
	}

	@Override
	public void generateReport() {
		
		StringBuilder builder = new StringBuilder();
		builder.append("Marca: ").append(product.getBrand()).append("\n")
			.append("Tipo: ").append(product.getType()).append("\n")
			.append("Quantidade: ").append(product.getAmount()).append("\n");


		createFile(builder.toString());

	}

}
