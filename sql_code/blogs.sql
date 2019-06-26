-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2019 at 10:13 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogs`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(4) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `small_content` varchar(2000) NOT NULL,
  `author` varchar(200) NOT NULL,
  `date` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `small_content`, `author`, `date`, `status`) VALUES
(1, 'Angular 7 Login Tutorial Example', '<p>Running the Angular 7 Login Tutorial Example Locally</p>\n<p>The tutorial example uses Webpack 4.23 to transpile the TypeScript code and bundle the Angular 7 modules together, and the webpack dev server is used as the local web server, to learn more about using webpack with TypeScript you can check out the webpack docs.</p>\n\n<p>Install NodeJS and NPM from https://nodejs.org/en/download/.\nDownload or clone the tutorial project source code from https://github.com/cornflourblue/angular-7-registration-login-example\nInstall all required npm packages by running npm install from the command line in the project root folder (where the package.json is located).</p>\n<p>Start the application by running npm start from the command line in the project root folder.</p>\n<p>Your browser should automatically open at http://localhost:8080 with the demo Angular 7 login page displayed.</p>', 'In this tutorial we''ll go through an example of how to build a simple user registration and login system using Angular 7, TypeScript and webpack 4.', 'Yograj', 1560696270, 1),
(2, 'The Huffington Post', '<p>The history of political blogging might usefully be divided into the periods pre- and post-Huffington. Before the millionaire socialite Arianna Huffington decided to get in on the act, bloggers operated in a spirit of underdog solidarity. They hated the mainstream media - and the feeling was mutual. </p><p>But the pyjama purists were confounded. Arianna''s money talked just as loudly online as off, and the Huffington Post quickly became one of the most influential and popular journals on the web. It recruited professional columnists and celebrity bloggers. It hoovered up traffic. Its launch was a landmark moment in the evolution of the web because it showed that many of the old rules still applied to the new medium: a bit of marketing savvy and deep pockets could go just as far as geek credibility, and get there faster. </p><p>To borrow the gold-rush simile beloved of web pioneers, Huffington''s success made the first generation of blogger </p>', 'The history of political blogging might usefully be divided into the periods pre- and post-Huffington. Before the millionaire socialite Arianna Huffington decided to get in on the act, bloggers operated in a spirit of underdog solidarity. They hated the mainstream media - and the feeling was mutual.', 'Yograj', 1560697276, 1),
(3, 'Angular Services and Controllers', '<p>In AngularJS, a service is a function, or object, that is available for, and limited to, your AngularJS application.</p>\r\n\r\n<h4>Services</h4>\r\n\r\n<p>AngularJS has about 30 built-in services. Here I’m going to explain most common used and advanced.</p>\r\n\r\n<p>The service factory function generates the single object or function that represents the service to the rest of the application. The object or function returned by the service is injected into any component (controller, service, filter or directive) that specifies a dependency on the service</p>', 'Here in this blog I am going to show some advanced and common functionalities of Angular JS', 'Yograj', 1560851600, 1);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(4) NOT NULL,
  `b_id` int(4) NOT NULL,
  `name` varchar(200) NOT NULL,
  `comment` varchar(300) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `b_id`, `name`, `comment`, `status`) VALUES
(1, 1, 'Aaron', 'This is Test Comment for Blog 1 by Aaron', 1),
(2, 2, 'Mark', 'This is Test Comment for Blog 2 by Mark', 1),
(3, 1, 'Mark', 'This is Comment for Blog 1 by Mark', 1),
(4, 2, 'Aaron W.', 'This is test Comment for Blog 3', 1),
(5, 1, 'Mark', 'blog 3 comment', 1),
(6, 3, 'Mark', 'Comment for Blog 3', 1),
(7, 2, 'Mark', 'Comment for Blog 2', 0),
(8, 3, 'Sachin', 'This is Blog 3 Comment', 0),
(9, 3, 'Rahul', 'This is Test comment for blog 3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(4) NOT NULL,
  `name` varchar(200) NOT NULL,
  `message` varchar(500) NOT NULL,
  `date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `message`, `date`) VALUES
(21, 'Yograj', 'This is Test Message ', 1561218093);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(4) NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `pass`, `status`) VALUES
(1, 'John', 'Doe', 'admin', 'admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
