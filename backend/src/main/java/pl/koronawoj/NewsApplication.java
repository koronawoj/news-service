package pl.koronawoj;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import pl.koronawoj.domain.Comment;
import pl.koronawoj.domain.News;
import pl.koronawoj.service.CommentService;
import pl.koronawoj.service.NewsService;

@SpringBootApplication
public class NewsApplication implements CommandLineRunner {
	
	
	@Autowired
	public NewsService newsService;
	
	@Autowired
	public CommentService commentService;

	public static void main(String[] args) {
		SpringApplication.run(NewsApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		
		News obj = new News("Title-1", "Text-1", "13.13.13", "");
		newsService.create(obj);
		
		Comment com = new Comment("1", "LAdne", "wojtek", "12.12.12"); 
		commentService.create(com);
		
		
		
	}
}
