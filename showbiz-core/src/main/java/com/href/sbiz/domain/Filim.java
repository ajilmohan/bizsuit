package com.href.sbiz.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "FILIM")
public class Filim implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Column(name = "ID", nullable = false)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "DIRECTOR", nullable = false)
	private String director;
	
	@Column(name = "BANNER")
	private String banner;
	
	@Column(name = "CASTS", nullable = false)
	private String castes ;
	
	@Column(name = "START_DATE")
	private Date startDate;
	
	@Column(name = "END_DATE")
	private Date endDate;
	
	@Column(name = "STATUS")
	private String status;
	
	@Column(name = "IMG_PREFIX")
	private String imagePrefix;
	
	@Column(name = "TOTAL_COUNT")
	private int totalShows;
	
	/*@OneToMany(orphanRemoval=true)
    @JoinColumn(name="FILIM_ID") // join column is in table for Show
    public List<Show> shows;*/
	
	
	//@OneToMany(fetch = FetchType.EAGER, cascade = { CascadeType.ALL })
	//@Transient
	//@OneToMany(mappedBy="filim",cascade={CascadeType.ALL})
	@OneToMany(mappedBy = "filim", fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	public List<Show> shows;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public String getImagePrefix() {
		return imagePrefix;
	}

	public void setImagePrefix(String imagePrefix) {
		this.imagePrefix = imagePrefix;
	}

	public int getTotalShows() {
		return totalShows;
	}

	public void setTotalShows(int totalShows) {
		this.totalShows = totalShows;
	}

	public List<Show> getShows() {
		return shows;
	}

	public void setShows(List<Show> shows) {
		this.shows = shows;
	}

}
