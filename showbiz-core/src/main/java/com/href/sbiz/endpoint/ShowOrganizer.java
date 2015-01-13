package com.href.sbiz.endpoint;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.href.sbiz.dto.FilimDTO;
import com.href.sbiz.proxy.FilimProxy;

@Controller("showOrganizer")
public class ShowOrganizer {
	
	@Autowired
	FilimProxy filimProxy;
	

	@RequestMapping(value = "/filims", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<FilimDTO>> getFilims(){
		List<FilimDTO>  filims = new ArrayList<FilimDTO>();
		FilimDTO filim = new FilimDTO();
		filim.setBanner("EROS Int");
		filim.setCastes("Mohanlal");
		
        return new ResponseEntity<List<FilimDTO>>(filims, HttpStatus.OK);
	}

}
