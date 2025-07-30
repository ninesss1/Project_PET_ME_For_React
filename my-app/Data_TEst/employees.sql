CREATE TABLE [dbo].[employees]
(
  [Id] INT NOT NULL PRIMARY KEY
  , [Name] NVARCHAR(100) NOT NULL
  , [Position] NVARCHAR(50) NOT NULL
  , [Salary] DECIMAL(10, 2) NOT NULL
  , [Age] INT NULL
  , [Department] NVARCHAR(50) NULL
  , [HireDate] DATETIME NULL
)




