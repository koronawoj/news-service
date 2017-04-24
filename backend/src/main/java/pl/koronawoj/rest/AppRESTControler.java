package pl.koronawoj.rest;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import pl.koronawoj.domain.Comment;
import pl.koronawoj.domain.News;
import pl.koronawoj.service.CommentService;
import pl.koronawoj.service.NewsService;

@RestController
@RequestMapping("/api/news")
public class AppRESTControler {

	private final CommentService commentService;
	private final NewsService newsService;
	private final Map<String, Object> response = new LinkedHashMap<>();
	
	@Autowired
	public AppRESTControler(CommentService commentService, NewsService newsService) {
		this.commentService = commentService;
		this.newsService = newsService;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.GET, value = "/getNews")
	public @ResponseBody List<News> finndAll(){
		return newsService.getObj();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.GET, value = "/getNews/{id}")
	public @ResponseBody News finndById(@PathVariable String id){
		News news = newsService.findById(id);
		return news;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.GET, value = "/getComments/{id}")
	public @ResponseBody List<Comment> finndCommentsByNewsId(@PathVariable String id){
		return commentService.findByNewsId(id);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getComments")
	public @ResponseBody List<Comment> finndAllComment(){
		return commentService.getObj();
	}
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.POST, value = "/saveNews")
	public @ResponseBody Map<String, Object> create(@Valid @RequestBody News newsEntity, BindingResult bindingResult){
		
		if(chechErrors(bindingResult)){
			newsService.create(newsEntity);
			response.put("message", "News created succesfully");
		};
		
		return response;
	}
	

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.POST, value = "/saveComment")
	public @ResponseBody Map<String, Object> create(@Valid @RequestBody Comment commentEntity, BindingResult bindingResult){
		
		
		if(chechErrors(bindingResult)){
			commentService.create(commentEntity);
			response.put("message", "Comment created succesfully");
		};
		
		return response;
	}
	
	public boolean chechErrors(BindingResult bindingResult){
			if(bindingResult.hasErrors()){
			
			List<FieldError> errors = bindingResult.getFieldErrors();
			response.put("message", "Errors");
			
			for(FieldError error: errors){
				response.put(error.getField(), error.getDefaultMessage());
			}
			
			return false;
			
		}else {
			return true;
		}
	}

}
