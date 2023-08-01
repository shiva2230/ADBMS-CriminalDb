package com.adbms.criminalDb.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@Document(collection = "criminals")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Criminal {
    @Id
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



//    @DocumentReference
//    private List<Crimes> crimes;
}
