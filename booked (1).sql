-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2021 at 03:09 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booked`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `AppointmentsID` int(11) NOT NULL,
  `UserName` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `DateANDtime` timestamp NULL DEFAULT NULL,
  `contactsID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`AppointmentsID`, `UserName`, `address`, `notes`, `DateANDtime`, `contactsID`) VALUES
(2, 'hasan mohammad', 'amman/almadinah', 'Practical test', '2021-05-16 07:48:54', 11),
(3, 'mahmoud ali', 'irbid/alhuson', 'check', '2021-05-07 09:54:54', 33),
(4, 'rania hussam', 'amman/alhussien', 'Theoretical test', '2021-04-20 09:00:00', 66),
(5, 'dima omar', 'amman/nuzha', 'Practical test', '2021-04-22 07:48:54', 44),
(6, 'dina fares', 'amman/khalda', 'Theoretical exam test', '2021-05-15 22:50:54', 11),
(7, 'jana fathi', 'amman/tbrbour', 'Practical test', '2021-05-16 06:00:54', 11);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `contactsID` int(11) NOT NULL,
  `FullName` text DEFAULT NULL,
  `Email` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`contactsID`, `FullName`, `Email`) VALUES
(11, 'rawand saleh', 'rawand@yahoo.com'),
(22, 'sara nahlan', 'sara@yahoo.com'),
(33, 'hala ataf', 'hala@gmail.com'),
(44, 'aya ahmad', 'aya@gmail.com'),
(55, 'yasmine hasan', 'yasmine@gmail.com'),
(66, 'mohaamad ali', 'mohammad@yahoo.com'),
(77, 'omar nizar', 'omar@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`AppointmentsID`),
  ADD KEY `contactsID` (`contactsID`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`contactsID`),
  ADD UNIQUE KEY `Email` (`Email`) USING HASH;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`contactsID`) REFERENCES `contacts` (`contactsID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
