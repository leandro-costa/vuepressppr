
public class Client {
	public static void main(String[] args) {

		Product product = new Product("Teste", "teste1", 50, 13.5, 20);

		Report report1 = new CompleteReport(new PDFFile(), product);
		report1.generateReport();
		Report report2 = new BasicReport(new PDFFile(), product);
		report2.generateReport();

		Report report3 = new BasicReport(new CSVFile(), product);
		report3.generateReport();
	}
}
