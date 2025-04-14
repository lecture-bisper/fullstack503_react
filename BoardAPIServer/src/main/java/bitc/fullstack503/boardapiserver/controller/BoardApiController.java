package bitc.fullstack503.boardapiserver.controller;

import bitc.fullstack503.boardapiserver.dto.BoardDTO;
import bitc.fullstack503.boardapiserver.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

// @CrossOrigin : CORS 오류 발생 시 지정한 URL에서 요청하는 리소스는 CORS 규칙 위반에서 제외하는 어노테이션
// 메소드나 클래스에 적용
// URL은 여러개를 사용할 수 있음

//@CrossOrigin({"http://localhost:5173", "http://localhost:8080"})
@RequestMapping("/api")
@RestController
public class BoardApiController {

  @Autowired
  private BoardService boardService;

//  @CrossOrigin({"http://localhost:5173"})
  @GetMapping({"", "/"})
  public Object index() {
    return "Board API Server 접속";
  }

  @GetMapping("/boardList")
  public Object selectBoardList() throws Exception {

    List<BoardDTO> boardList = boardService.selectBoardList();

    return boardList;
  }

  @GetMapping("/boardDetail")
  public Object selectBoardDetail(@RequestParam("boardIdx") int boardIdx) throws Exception {

    BoardDTO board = boardService.selectBoardDetail(boardIdx);

    return board;
  }

  @PostMapping("/boardWrite")
  public Object insertBoard(BoardDTO board) throws Exception {

    Map<String, Object> resData = new HashMap<>();

    resData.put("result", "success");
    resData.put("data", board);

    return resData;
  }
}












