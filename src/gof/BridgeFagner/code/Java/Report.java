

public abstract class Report {

	protected File file;
	protected Product product;

	public Report(File f, Product product) {
		this.file = f;
		this.product = product;
	}

	public void createFile(String report ) {
		file.generateFile(report);
	}


	public abstract void generateReport();

}
