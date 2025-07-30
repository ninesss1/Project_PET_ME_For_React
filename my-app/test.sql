SELECT pa.* , pt.pttype , pt.name , pt.isuse , pt.paidst
FROM Patient.pa

    JOIN Pttype.pt

    ON pa.pttype = pt.pttype; 