
public class Product {
	private String brand;
	private String type;
	private int amount;
	private double value;
	private int amountSales;


	public Product(String brand, String type, int amount, double value, int amountSales) {
		this.brand = brand;
		this.type = type;
		this.amount = amount;
		this.value = value;
		this.amountSales = amountSales;
	}


	public String getBrand() {
		return this.brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public void setValue(double value) {
		this.value = value;
	}

	public int getAmount() {
		return this.amount;
	}

	public double getValue() {
		return this.value;
	}

	public int getAmountSales() {
		return this.amountSales;
	}

}
