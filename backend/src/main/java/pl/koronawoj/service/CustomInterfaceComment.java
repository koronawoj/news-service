package pl.koronawoj.service;

import java.util.List;

import pl.koronawoj.domain.Comment;

public interface CustomInterfaceComment {
	
	List<Comment> findByNewsId(String id);

}
  