-- phpMyAdmin SQL Dump
-- version 4.9.7deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 20/09/2021 às 20:51
-- Versão do servidor: 8.0.26-0ubuntu0.21.04.3
-- Versão do PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ICS`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `AnswersHistory`
--

CREATE TABLE `AnswersHistory` (
  `Id` int NOT NULL,
  `IdExerciseAnswers` int NOT NULL,
  `Date` datetime NOT NULL,
  `Event` text NOT NULL,
  `Status` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ClassMembers`
--

CREATE TABLE `ClassMembers` (
  `Id` int NOT NULL,
  `IdUser` int NOT NULL,
  `IdClassroom` int NOT NULL,
  `Module` varchar(20) DEFAULT 'Student'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Classroom`
--

CREATE TABLE `Classroom` (
  `Id` int NOT NULL,
  `IdUser` int NOT NULL,
  `Name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Description` text,
  `MaxStudents` int DEFAULT '100',
  `Enabled` tinyint(1) DEFAULT '1',
  `KeyAccess` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `CodeTemp`
--

CREATE TABLE `CodeTemp` (
  `Id` int NOT NULL,
  `IdUser` int DEFAULT NULL,
  `IdGroup` int DEFAULT NULL,
  `Code` text NOT NULL,
  `Command` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ExerciseAnswers`
--

CREATE TABLE `ExerciseAnswers` (
  `Id` int NOT NULL,
  `IdUser` int NOT NULL,
  `IdExercise` int NOT NULL,
  `IdGroup` int DEFAULT NULL,
  `Date` datetime NOT NULL,
  `Code` text NOT NULL,
  `Result` text,
  `Status` varchar(100) DEFAULT NULL,
  `CheckCount` int DEFAULT '0',
  `CheckList` text,
  `Command` text,
  `ExecTime` text,
  `Comment` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ExerciseFiles`
--

CREATE TABLE `ExerciseFiles` (
  `Id` int NOT NULL,
  `IdExercise` int NOT NULL,
  `FileName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `FileContent` mediumblob NOT NULL,
  `Size` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ExerciseGroups`
--

CREATE TABLE `ExerciseGroups` (
  `Id` int NOT NULL,
  `IdExercise` int NOT NULL,
  `IdGroup` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Exercises`
--

CREATE TABLE `Exercises` (
  `Id` int NOT NULL,
  `IdUser` int NOT NULL,
  `IdClassroom` int NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Date` datetime NOT NULL,
  `MaxSubmissions` int NOT NULL DEFAULT '0',
  `MaxTimeout` int NOT NULL DEFAULT '50',
  `MaxFileSize` int DEFAULT '0',
  `CheckCount` int DEFAULT '0',
  `CheckList` text,
  `Command` text,
  `ExecTime` varchar(60) DEFAULT NULL,
  `Content` text,
  `Code` text,
  `Result` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ExerciseScores`
--

CREATE TABLE `ExerciseScores` (
  `Id` int NOT NULL,
  `IdExercise` int NOT NULL,
  `IdUser` int DEFAULT NULL,
  `IdGroup` int DEFAULT NULL,
  `Feedback` text,
  `Score` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `GroupHistory`
--

CREATE TABLE `GroupHistory` (
  `Id` int NOT NULL,
  `IdUser` int NOT NULL,
  `IdGroup` int NOT NULL,
  `ESelection` int DEFAULT '0',
  `EInsert` int DEFAULT '0',
  `EReplace` int DEFAULT '0',
  `EDelete` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `GroupMembers`
--

CREATE TABLE `GroupMembers` (
  `Id` int NOT NULL,
  `IdUser` int NOT NULL,
  `IdGroup` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Groups`
--

CREATE TABLE `Groups` (
  `Id` int NOT NULL,
  `IdClassroom` int NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `KeyAccess` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Users`
--

CREATE TABLE `Users` (
  `Id` int NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Module` varchar(10) NOT NULL DEFAULT 'User',
  `ForceChangePass` int DEFAULT '0',
  `TempChangePass` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `AnswersHistory`
--
ALTER TABLE `AnswersHistory`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IdExerciseAnswers` (`IdExerciseAnswers`);

--
-- Índices de tabela `ClassMembers`
--
ALTER TABLE `ClassMembers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdUser_2` (`IdUser`,`IdClassroom`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdClassroom` (`IdClassroom`);

--
-- Índices de tabela `Classroom`
--
ALTER TABLE `Classroom`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `KeyAccess` (`KeyAccess`),
  ADD KEY `IdUser` (`IdUser`);

--
-- Índices de tabela `CodeTemp`
--
ALTER TABLE `CodeTemp`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdGroup_2` (`IdGroup`),
  ADD UNIQUE KEY `IdUser_2` (`IdUser`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdGroup` (`IdGroup`);

--
-- Índices de tabela `ExerciseAnswers`
--
ALTER TABLE `ExerciseAnswers`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdExercise` (`IdExercise`),
  ADD KEY `IdGroup` (`IdGroup`);

--
-- Índices de tabela `ExerciseFiles`
--
ALTER TABLE `ExerciseFiles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdExercise_2` (`IdExercise`,`FileName`),
  ADD KEY `IdExercise` (`IdExercise`);

--
-- Índices de tabela `ExerciseGroups`
--
ALTER TABLE `ExerciseGroups`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdExercise` (`IdExercise`,`IdGroup`),
  ADD KEY `IdGroup` (`IdGroup`);

--
-- Índices de tabela `Exercises`
--
ALTER TABLE `Exercises`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdClassroom` (`IdClassroom`);

--
-- Índices de tabela `ExerciseScores`
--
ALTER TABLE `ExerciseScores`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdExercise_2` (`IdExercise`,`IdGroup`),
  ADD UNIQUE KEY `IdExercise_3` (`IdExercise`,`IdUser`),
  ADD KEY `IdExercise` (`IdExercise`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdGroup` (`IdGroup`);

--
-- Índices de tabela `GroupHistory`
--
ALTER TABLE `GroupHistory`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdUser_2` (`IdUser`,`IdGroup`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdGroup` (`IdGroup`);

--
-- Índices de tabela `GroupMembers`
--
ALTER TABLE `GroupMembers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdUser` (`IdUser`,`IdGroup`),
  ADD KEY `IdGroup` (`IdGroup`);

--
-- Índices de tabela `Groups`
--
ALTER TABLE `Groups`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Name` (`Name`),
  ADD UNIQUE KEY `KeyAccess` (`KeyAccess`),
  ADD KEY `IdClassroom` (`IdClassroom`);

--
-- Índices de tabela `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `AnswersHistory`
--
ALTER TABLE `AnswersHistory`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ClassMembers`
--
ALTER TABLE `ClassMembers`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Classroom`
--
ALTER TABLE `Classroom`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `CodeTemp`
--
ALTER TABLE `CodeTemp`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ExerciseAnswers`
--
ALTER TABLE `ExerciseAnswers`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ExerciseFiles`
--
ALTER TABLE `ExerciseFiles`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ExerciseGroups`
--
ALTER TABLE `ExerciseGroups`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Exercises`
--
ALTER TABLE `Exercises`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ExerciseScores`
--
ALTER TABLE `ExerciseScores`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `GroupHistory`
--
ALTER TABLE `GroupHistory`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `GroupMembers`
--
ALTER TABLE `GroupMembers`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Groups`
--
ALTER TABLE `Groups`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Users`
--
ALTER TABLE `Users`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `AnswersHistory`
--
ALTER TABLE `AnswersHistory`
  ADD CONSTRAINT `AnswersHistory_ibfk_1` FOREIGN KEY (`IdExerciseAnswers`) REFERENCES `ExerciseAnswers` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `ClassMembers`
--
ALTER TABLE `ClassMembers`
  ADD CONSTRAINT `ClassMembers_ibfk_1` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ClassMembers_ibfk_2` FOREIGN KEY (`IdClassroom`) REFERENCES `Classroom` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `Classroom`
--
ALTER TABLE `Classroom`
  ADD CONSTRAINT `Classroom_ibfk_1` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `CodeTemp`
--
ALTER TABLE `CodeTemp`
  ADD CONSTRAINT `CodeTemp_ibfk_1` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `CodeTemp_ibfk_2` FOREIGN KEY (`IdGroup`) REFERENCES `Groups` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `ExerciseAnswers`
--
ALTER TABLE `ExerciseAnswers`
  ADD CONSTRAINT `ExerciseAnswers_ibfk_1` FOREIGN KEY (`IdExercise`) REFERENCES `Exercises` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ExerciseAnswers_ibfk_2` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ExerciseAnswers_ibfk_3` FOREIGN KEY (`IdGroup`) REFERENCES `Groups` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `ExerciseFiles`
--
ALTER TABLE `ExerciseFiles`
  ADD CONSTRAINT `ExerciseFiles_ibfk_1` FOREIGN KEY (`IdExercise`) REFERENCES `Exercises` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `ExerciseGroups`
--
ALTER TABLE `ExerciseGroups`
  ADD CONSTRAINT `ExerciseGroups_ibfk_1` FOREIGN KEY (`IdGroup`) REFERENCES `Groups` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ExerciseGroups_ibfk_2` FOREIGN KEY (`IdExercise`) REFERENCES `Exercises` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `Exercises`
--
ALTER TABLE `Exercises`
  ADD CONSTRAINT `Exercises_ibfk_1` FOREIGN KEY (`IdClassroom`) REFERENCES `Classroom` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Exercises_ibfk_2` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `ExerciseScores`
--
ALTER TABLE `ExerciseScores`
  ADD CONSTRAINT `ExerciseScores_ibfk_1` FOREIGN KEY (`IdExercise`) REFERENCES `Exercises` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ExerciseScores_ibfk_2` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ExerciseScores_ibfk_3` FOREIGN KEY (`IdGroup`) REFERENCES `Groups` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `GroupHistory`
--
ALTER TABLE `GroupHistory`
  ADD CONSTRAINT `GroupHistory_ibfk_1` FOREIGN KEY (`IdGroup`) REFERENCES `Groups` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `GroupHistory_ibfk_2` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `GroupMembers`
--
ALTER TABLE `GroupMembers`
  ADD CONSTRAINT `GroupMembers_ibfk_1` FOREIGN KEY (`IdUser`) REFERENCES `Users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `GroupMembers_ibfk_2` FOREIGN KEY (`IdGroup`) REFERENCES `Groups` (`Id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `Groups`
--
ALTER TABLE `Groups`
  ADD CONSTRAINT `Groups_ibfk_1` FOREIGN KEY (`IdClassroom`) REFERENCES `Classroom` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
