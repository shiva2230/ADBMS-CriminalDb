package com.adbms.criminalDb.Service.implementation;

import com.adbms.criminalDb.Dto.CriminalDto;
import com.adbms.criminalDb.Exception.CriminalNotFoundException;
import com.adbms.criminalDb.Mapper.CriminalMapper;
import com.adbms.criminalDb.Model.Criminal;
import com.adbms.criminalDb.Repository.CriminalRepository;
import com.adbms.criminalDb.Service.CriminalService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CriminalServiceImplementation implements CriminalService {
    private final CriminalRepository criminalRepository;

    @Autowired
    public CriminalServiceImplementation(CriminalRepository criminalRepository) {
        this.criminalRepository = criminalRepository;
    }

    @Override
    public CriminalDto createCriminal(CriminalDto criminalDto){
        Criminal criminal= CriminalMapper.maptoCriminal(criminalDto);
        Criminal savedCriminal=criminalRepository.save(criminal);
        return CriminalMapper.maptoCriminalDto(savedCriminal);
    }

    @Override
    public List<CriminalDto> getAllCriminals(){
        List<Criminal> criminals=criminalRepository.findAll();
        return criminals.stream().map((criminal) -> CriminalMapper.maptoCriminalDto(criminal)).collect(Collectors.toList());
    }

    @Override
    public CriminalDto getCriminalById(String criminalId) {
        Criminal criminal=criminalRepository.findById(criminalId)
                .orElseThrow(() -> new CriminalNotFoundException("Criminal does not exist with given id :"+criminalId));
        return CriminalMapper.maptoCriminalDto(criminal);
    }

    @Override
    public CriminalDto updateCriminal(String criminalId, CriminalDto updatedCriminal) {
        Criminal criminal=criminalRepository.findById(criminalId).orElseThrow(
                () -> new CriminalNotFoundException("Criminal does not exist with given id: "+criminalId));
        criminal.setName(updatedCriminal.getName());
        criminal.setHeight(updatedCriminal.getHeight());
        criminal.setWeight(updatedCriminal.getWeight());
        criminal.setPhone(updatedCriminal.getPhone());
        criminal.setDob(updatedCriminal.getDob());
        criminal.setGender(updatedCriminal.getGender());
        criminal.setStreetAddress1(updatedCriminal.getStreetAddress1());
        criminal.setStreetAddress2(updatedCriminal.getStreetAddress2());
        criminal.setCountry(updatedCriminal.getCountry());
        criminal.setState(updatedCriminal.getState());
        criminal.setCity(updatedCriminal.getCity());
        criminal.setPostalCode(updatedCriminal.getPostalCode());
        Criminal updatedCriminalObj= criminalRepository.save(criminal);
        return CriminalMapper.maptoCriminalDto(updatedCriminalObj);
    }

    @Override
    public void deleteCriminal(String criminalId) {
        Criminal criminal=criminalRepository.findById(criminalId).orElseThrow(
                () -> new CriminalNotFoundException("Criminal does not exist with given id : "+criminalId));
        criminalRepository.deleteById(criminalId);
    }


}
