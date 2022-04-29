
public class CompleteReport extends Report {

	public CompleteReport(File file, Product product) {
		super(file, product);
	}

	@Override
	public void generateReport() {

		StringBuilder builder = new StringBuilder();
		builder.append("Marca: ").append(product.getBrand()).append("\n")
				.append("Tipo: ").append(product.getType()).append("\n")
				.append("Quantidade: ").append(product.getAmount()).append("\n")
				.append("Valor: ").append(product.getValue()).append("\n")
				.append("Total de vendas: ").append(product.getAmountSales()).append("\n")
				.append("Valor total de vendas: ").append(product.getValue() * product.getAmountSales()).append("\n");

		createFile(builder.toString());

	}

}
