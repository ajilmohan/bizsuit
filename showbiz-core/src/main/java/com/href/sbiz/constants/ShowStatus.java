package com.href.sbiz.constants;

public enum ShowStatus {
	
	AVAILABLE("Available"),
	SOLDOUT("Sold Out"),
	FASTFILLING("Fast Filling");
	
	private String status;
	
	ShowStatus(String value){
		this.status = value;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
