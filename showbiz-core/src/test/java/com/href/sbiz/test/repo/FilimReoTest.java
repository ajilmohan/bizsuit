package com.href.sbiz.test.repo;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.transaction.annotation.Transactional;

import com.href.sbiz.domain.Filim;
import com.href.sbiz.domain.Show;
import com.href.sbiz.repository.FilimRepo;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
									"classpath:config.xml",
									"classpath:dao.xml"
									})
@TestExecutionListeners({
DependencyInjectionTestExecutionListener.class,
DirtiesContextTestExecutionListener.class,
TransactionalTestExecutionListener.class })
public class FilimReoTest {
	
	
	@Autowired
	FilimRepo filimRepo;
	
	
	
	@Test
	@Rollback(false)
	@Transactional
	public void testInsertRecord(){
		
		
		Filim filim  = new Filim();
		filim.setBanner("Eros");
		filim.setCastes("Mohanlal");
		filim.setDirector("Renjith");
		filim.setEndDate(new Date());
		filim.setStartDate(new Date());
		filim.setImagePrefix("New");
		filim.setName("NewEra");
		filim.setStatus("Running");
		
		Show show = new Show();
		show.setScreen("SC1");
		Date dt = new Date();
		show.setShowTime(new Timestamp(dt.getTime()));
		show.setStatus("Sold Out");
		show.setFilim(filim);
		
		List<Show>  shows = new ArrayList<Show>();
		shows.add(show);
		
		filim.setShows(shows);
		
		filimRepo.save(filim);
	}

}
