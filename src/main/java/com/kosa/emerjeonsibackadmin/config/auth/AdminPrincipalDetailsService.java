package com.kosa.emerjeonsibackadmin.config.auth;

import com.kosa.emerjeonsibackadmin.dto.Admin;
import com.kosa.emerjeonsibackadmin.mapper.AdminMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AdminPrincipalDetailsService implements UserDetailsService {
    private final AdminMapper adminMapper;

    public AdminPrincipalDetailsService(AdminMapper adminMapper) {
        this.adminMapper = adminMapper;
    }

    @Override
    public UserDetails loadUserByUsername(String adminId) throws UsernameNotFoundException {
        log.info("loadUserByUsername() : adminId = {}", adminId);

        Admin resultAdmin = adminMapper.selectAdminByAdminId(adminId);
        log.info("loadUserByUsername() : resultAdmin = {}", resultAdmin);

        if(resultAdmin != null) {
            return new AdminPrincipalDetails(resultAdmin);
        }

        return null;
    }
}
