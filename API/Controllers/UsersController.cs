// using API.Data;
using API.DTOs;
// using API.Entities;
using API.Interfaces;
// using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
[Authorize]
public class UsersController(IUserRepository userRepository) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers() 
    {
        var users = await userRepository.GetMembersAsync();

        // var usersToReturn = mapper.Map<IEnumerable<MemberDto>>(users);

        return Ok(users);
    }

    [HttpGet("{username}")] //api/users/id
    public async Task<ActionResult<MemberDto>> GetUser(string username) 
    {
        var user = await userRepository.GetMemberAsync(username);

        if (user == null) return NotFound();
        
        return user;
    }

    // [HttpGet("{id:int}")] //api/users/id
    // public async Task<ActionResult<AppUser>> GetUser(int id) 
    // {
    //     var user = await context.Users.FindAsync(id);

    //     if (user == null) return NotFound();
        
    //     return user;
    // }
}
