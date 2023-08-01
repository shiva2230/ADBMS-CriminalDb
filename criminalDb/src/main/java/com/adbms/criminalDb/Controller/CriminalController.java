package com.adbms.criminalDb.Controller;

import com.adbms.criminalDb.Dto.CriminalDto;
import com.adbms.criminalDb.Service.CriminalService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/criminalDb/criminals")
public class CriminalController {
private final CriminalService criminalService;
    @Autowired
    public CriminalController(CriminalService criminalService) {
        this.criminalService = criminalService;
    }


    @PostMapping("create")
    public ResponseEntity<CriminalDto> createCriminal(@RequestBody CriminalDto criminalDto){
        CriminalDto savedCriminal=criminalService.createCriminal(criminalDto);
        return new ResponseEntity<>(savedCriminal, HttpStatus.CREATED);
    }

    @GetMapping("getAll")
    public ResponseEntity<List<CriminalDto>> getAllCriminals(){
        List<CriminalDto> allCriminals=criminalService.getAllCriminals();
        return ResponseEntity.ok(allCriminals);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<CriminalDto> getCriminalById(@PathVariable("id") String criminalId){
        CriminalDto criminalDto=criminalService.getCriminalById(criminalId);
        return ResponseEntity.ok(criminalDto);
    }

    @PutMapping("edit/{id}")
    public ResponseEntity<CriminalDto> updateCriminal(@PathVariable("id") String criminalId,
                                                      @RequestBody CriminalDto updatedCriminal){
        CriminalDto criminalDto=criminalService.updateCriminal(criminalId,updatedCriminal);
        return ResponseEntity.ok(criminalDto);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteCriminal(@PathVariable("id") String criminalId){
        criminalService.deleteCriminal(criminalId);
        return ResponseEntity.ok("Criminal data deleted successfully");
    }

}
