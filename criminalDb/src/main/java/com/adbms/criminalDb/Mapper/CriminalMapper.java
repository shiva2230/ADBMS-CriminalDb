package com.adbms.criminalDb.Mapper;

import com.adbms.criminalDb.Dto.CriminalDto;
import com.adbms.criminalDb.Model.Criminal;

public class CriminalMapper {
    public static Criminal maptoCriminal(CriminalDto criminalDto){
        return new Criminal(
                criminalDto.getId(),
                criminalDto.getName(),
                criminalDto.getHeight(),
                criminalDto.getWeight(),
                criminalDto.getPhone(),
                criminalDto.getDob(),
                criminalDto.getGender(),
                criminalDto.getStreetAddress1(),
                criminalDto.getStreetAddress2(),
                criminalDto.getCity(),
                criminalDto.getCountry(),
                criminalDto.getState(),
                criminalDto.getPostalCode(),
                criminalDto.getCrimes()
        );
    }

    public static CriminalDto maptoCriminalDto(Criminal criminal){
        return new CriminalDto(
                criminal.getId(),
                criminal.getName(),
                criminal.getHeight(),
                criminal.getWeight(),
                criminal.getPhone(),
                criminal.getDob(),
                criminal.getGender(),
                criminal.getStreetAddress1(),
                criminal.getStreetAddress2(),
                criminal.getCity(),
                criminal.getState(),
                criminal.getCountry(),
                criminal.getPostalCode(),
                criminal.getCrimes()
        );
    }
}
