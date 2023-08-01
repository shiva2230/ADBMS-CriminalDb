package com.adbms.criminalDb.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor

public class CriminalDto {
    private String id;
    private String name;
    private String height;
    private String weight;
    private String phone;
    private LocalDate dob;
    private String gender;
    private String streetAddress1;
    private String streetAddress2;
    private String country;
    private String state;
    private String city;
    private String postalCode;
    private String crimes;



//    private List<Crimes> crimes;
}
