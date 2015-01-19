package com.href.sbiz.endpoint;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.href.sbiz.domain.Filim;
import com.href.sbiz.dto.FilimDTO;
import com.href.sbiz.proxy.FilimProxy;

@Controller("showOrganizer")
public class ShowOrganizer {
	
	final static Logger logger = LoggerFactory.getLogger(ShowOrganizer.class);
	
	@Autowired
	FilimProxy filimProxy;
	

	@RequestMapping(value = "/filims", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<FilimDTO>> getFilims(){
		logger.info("Endpoint '/filims' invoked . ");
		List<FilimDTO>  filims = new ArrayList<FilimDTO>();
		FilimDTO filim = new FilimDTO();
		filim.setBanner("EROS Int");
		filim.setCastes("Mohanlal");
		logger.info("Exit from endpoint '/filims'. ");
        return new ResponseEntity<List<FilimDTO>>(filims, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/addfilim", method = RequestMethod.PUT)
	@ResponseBody
	public ResponseEntity<Map<String,String>> addFilim( @RequestBody FilimDTO filim){
		logger.info("Endpoint '/addfilim' invoked . ");
		Map<String,String> response = new HashMap<String, String>();
		Filim filimIn = prepareDomainFilimInstance(filim);
		
		try {
			filimProxy.save(filimIn);
		} catch (Exception e) {
			logger.error("Error !!!");
			logger.error("Error : 'Exception' " + e.getMessage());
		}
		
		logger.info("Exit from endpoint '/addfilim'. ");
		return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
	}
	
	
	private Filim prepareDomainFilimInstance(FilimDTO filim){
		logger.info(".prepareDomainFilimInstance() helper function invoked . ");
		Filim filimIn = new Filim();
		try {
			BeanUtils.copyProperties(filimIn, filim);
		} catch (IllegalAccessException e) {
			logger.error("Error : 'IllegalAccessException' " + e.getMessage());
		} catch (InvocationTargetException e) {
			logger.error("Error : 'InvocationTargetException' " + e.getMessage());
		}
		logger.info("Exit. ");
		return filimIn;
	}

}
