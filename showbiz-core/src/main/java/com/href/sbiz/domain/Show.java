package com.href.sbiz.domain;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

@Entity
@Table(name ="SHOWS")
public class Show {
	
	@Column(name = "ID", nullable = false)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	/*@Column(name = "FILIM_ID", nullable = false)
	private Long filimId;*/
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "FILIM_ID")
	Filim filim;
	
	@Column(name = "SCREEN", nullable = false)
	private String screen;
	
	@Column(name = "SHOWTIME", nullable = false)
	//@Transient
	private Timestamp showTime;
	
	@Column(name = "STATUS", nullable = false)
	private String status;

	/*public Long getFilimId() {
		return filimId;
	}

	public void setFilimId(Long filimId) {
		this.filimId = filimId;
	}*/

	public String getScreen() {
		return screen;
	}

	public void setScreen(String screen) {
		this.screen = screen;
	}

	public Timestamp getShowTime() {
		return showTime;
	}

	public void setShowTime(Timestamp showTime) {
		this.showTime = showTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Filim getFilim() {
		return filim;
	}

	public void setFilim(Filim filim) {
		this.filim = filim;
	}

}
