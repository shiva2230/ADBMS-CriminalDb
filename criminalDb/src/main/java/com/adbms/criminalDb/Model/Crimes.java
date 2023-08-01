package com.adbms.criminalDb.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
@Document(collection = "crimes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Crimes {
    @Id
    private String id;
    private String crimeName;
    private String description;
    private Date dateCommitted;
    private String location;
    private List<String> witnesses;
    private boolean solved;
    private String investigatingOfficer;
}
