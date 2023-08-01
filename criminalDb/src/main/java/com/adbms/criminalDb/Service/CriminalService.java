package com.adbms.criminalDb.Service;

import com.adbms.criminalDb.Dto.CriminalDto;
import com.adbms.criminalDb.Repository.CriminalRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CriminalService {
    CriminalDto createCriminal(CriminalDto criminalDto);
    List<CriminalDto> getAllCriminals();
    CriminalDto getCriminalById(String criminalId);
    CriminalDto updateCriminal(String criminalId, CriminalDto updatedCriminal);
    void deleteCriminal(String criminalId);
}
