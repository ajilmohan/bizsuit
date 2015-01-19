package com.href.sbiz.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.href.sbiz.domain.Filim;

public interface FilimRepo extends JpaRepository<Filim, Serializable> {
	
	

}
