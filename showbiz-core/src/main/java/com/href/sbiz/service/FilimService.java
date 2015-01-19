package com.href.sbiz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.href.sbiz.domain.Filim;
import com.href.sbiz.proxy.FilimProxy;
import com.href.sbiz.repository.FilimRepo;

@Service("FilimService")
@Transactional
public class FilimService implements FilimProxy {
	
	@Autowired
	FilimRepo filimRepo;

	public Filim save(Filim entity) {
		return filimRepo.save(entity);
	}

	public void delete(long id) {
		filimRepo.delete(id);
	}

	public void deleteAll() {
		// TODO Auto-generated method stub
	}

	public Filim findOne(long id) {
		return filimRepo.findOne(id);
	}

	public List<Filim> findAll() {
		return filimRepo.findAll();
	}

}
