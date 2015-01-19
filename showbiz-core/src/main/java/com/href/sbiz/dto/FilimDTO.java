package com.href.sbiz.dto;

import java.util.Date;
import java.util.List;

public class FilimDTO {
	
	private String id;
	private String name;
	private String director;
	private String banner;
	private String castes ;
	private Date startDate;
	private Date endDate;
	private String status;
	private String imagePrefix;
	private int totalShows;
	private String[] imageUrls;
	private List<ShowDTO> shows;
	
	
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getBanner() {
		return banner;
	}
	public void setBanner(String banner) {
		this.banner = banner;
	}
	public String getCastes() {
		return castes;
	}
	public void setCastes(String castes) {
		this.castes = castes;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getTotalShows() {
		return totalShows;
	}
	public void setTotalShows(int totalShows) {
		this.totalShows = totalShows;
	}
	public String[] getImageUrls() {
		return imageUrls;
	}
	public void setImageUrls(String[] imageUrls) {
		this.imageUrls = imageUrls;
	}
	public List<ShowDTO> getShows() {
		return shows;
	}
	public void setShows(List<ShowDTO> shows) {
		this.shows = shows;
	}
	public String getImagePrefix() {
		return imagePrefix;
	}
	public void setImagePrefix(String imagePrefix) {
		this.imagePrefix = imagePrefix;
	}
	
	
	
	

}
